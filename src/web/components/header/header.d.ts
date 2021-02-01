type HeaderProps = {
  user?: Record<string, unknown>;
  onLogin: React.ReactEventHandler;
  onLogout: React.ReactEventHandler;
  onCreateAccount: React.ReactEventHandler;
};
