const DashboardComponent: React.FC = () => {
  const dispatch = useDispatch();
  
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get<UserInfo>('/path/to/UserInfo/endpoint'); // Update the url
        dispatch(actions.getUser(response.data)); // Dispatch the getUser action with the response
        setUserInfo(response.data); // Set the userInfo state
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    
    getCurrentUser();
  }, [dispatch]);
    
  return (
    <psDashboardTemplate userInfo={userInfo} />
  );
};