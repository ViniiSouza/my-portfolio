// com_tower: Bully-style election, the tower with the highest uptime wins
func StartElection(towers []types.Tower) {
	uptime := config.Configuration.GetUptimeSeconds()

	electionReq := types.ElectionRequest{
		CandidateUptime: uptime,
	}

	hasHighestUptime := true
	for _, tower := range towers {
		if config.Configuration.GetId() == tower.UUID {
			continue
		}

		url := fmt.Sprintf("http://t-%s.tower.%s/election", tower.UUID.String(), config.Configuration.GetBaseDns())
		// ... POST electionReq to the peer and decode electionResp

		if resp.StatusCode == http.StatusOK && electionResp.HasHigherUptime {
			hasHighestUptime = false
			break
		}
	}

	if !hasHighestUptime {
		return
	}

	config.Configuration.SetLeaderUUID(config.Configuration.GetId())
	ChangeRoleCh <- types.Leader
	go broadcastCoordinator(towers)
}
