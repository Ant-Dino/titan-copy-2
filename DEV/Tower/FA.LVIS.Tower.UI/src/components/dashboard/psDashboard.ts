const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
useEffect(() => {
const fetchData = async () => {
  try {
    const response = await axios.get('your-data-source-url');
    setData(response.data);
    setLoading(false);
  } catch (error) {
    setError('An error occurred while fetching data');
    setLoading(false);
  }
};
fetchData();
}, []); // Empty array makes this effect run only once
if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
return (
  <div>
    <PsDashboardTemplate>
      <TemplateOne data={data} />
      <TemplateTwo data={data} />
      <TemplateThree data={data} />
      <TemplateFour data={data} />
    </PsDashboardTemplate>
  </div>
);