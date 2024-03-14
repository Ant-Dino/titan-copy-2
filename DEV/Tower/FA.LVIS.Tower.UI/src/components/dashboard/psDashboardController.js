import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from './actions';
import psDashboardTemplate from './psDashboardTemplate';
import { AppState } from './store';
// Assuming an action in actions.ts looks something like this:
interface Props {
    data: any[];
    fetchData: () => void;
const DashboardComponent = ({ data, fetchData }: Props) => {
    useEffect(() => {
        fetchData(); // Dispatch action on component mount
    }, [fetchData]);
    return (
        <div>
            {/* Using the psDashboardTemplate as a component */}
            <psDashboardTemplate data={data} />
        </div>
    );
// Mapping state from the Redux store to props
const mapStateToProps = (state: AppState) => ({
    data: state.data,
// Mapping dispatch actions to props
const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchData: () => dispatch(actions.fetchData()),
// Connect the DashboardComponent to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);