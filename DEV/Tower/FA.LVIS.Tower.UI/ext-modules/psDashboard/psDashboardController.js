import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, exampleAction } from './actions';
import PsDashboardTemplate from './psDashboardTemplate';
interface DashboardProps {
    data: any; // Example data structure received as props
    fetchData: () => void; // Fetch data action
    exampleAction: (param: any) => void; // An example action with a parameter
const Dashboard: React.FC<DashboardProps> = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.data);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    const handleAction = () => {
        dispatch(exampleAction('sample parameter'));
    return <PsDashboardTemplate data={data} onAction={handleAction} />;
const mapStateToProps = (state: any) => ({
    ...state
const mapDispatchToProps = {
    fetchData,
    exampleAction
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);