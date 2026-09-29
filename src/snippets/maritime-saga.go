// The structure granted the slot: now take the authoritative lock at the leader
if result.State == types.FreeSlotState {
	acquireRequest := types.AcquireSlotRequest{
		VehicleUUID:          request.VehicleUUID,
		StructureUUID:        request.StructureUUID,
		StructureSlotRequest: request.StructureSlotRequest,
	}

	acquireResult, err := s.integration.AcquireSlotLockInTowerLeader(ctx, acquireRequest)
	if err != nil {
		log.Printf("failed to request slot to tower leader: %v", err)

		// rollback slot request in structure
		releaseSlotReq := types.ReleaseSlotRequest{SlotNumber: request.SlotNumber, SlotType: request.SlotType}
		if err := s.integration.ReleaseSlot(ctx, request.StructureUUID, request.StructureType, releaseSlotReq); err != nil {
			return nil, fmt.Errorf("failed to rollback slot request in %s %s: %w", request.StructureType, request.StructureUUID.String(), err)
		}

		return &types.SlotResponse{
			State: types.InUseSlotState,
		}, nil
	}

	if acquireResult.Result == types.UnavailableAcquireSlotResultType {
		return &types.SlotResponse{
			State: types.InUseSlotState,
		}, nil
	}
}
