public override async Task OnConnectedAsync()
{
    if (Context.User == null || !Context.User.Claims.Any() || !Context.User.HasClaim(any => any.Type == ClaimTypes.Name))
    {
        throw new HubException("Unauthorized connection");
    }

    var userIdentifier = GetUserIdentifier();

    if (HubConnections.UserHasConnectionLimit(userIdentifier))
    {
        throw new HubException("User concurrent connections limit exceeded");
    }

    HubConnections.AddUserConnection(userIdentifier, Context.ConnectionId);

    await AlertUserStatus(new UserStatus(userIdentifier, Utils.Enums.EStatus.Online));

    await base.OnConnectedAsync();
}
