import React, { useState, useEffect } from 'react';
import { DatePicker, Select, Button, Modal, notification } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { useCookies } from 'react-cookie';

const { RangePicker } = DatePicker;
const { Option } = Select;

function PsReportingComponent() {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState('');
    const [dateRange, setDateRange] = useState([moment(), moment()]);
    const [dateFilterSelection, setDateFilterSelection] = useState('7');
    const [accessRights, setAccessRights] = useState({ hasAccess: false, hasSuperAccess: false });
    const [serviceGridData, setServiceGridData] = useState([]);
    const [busy, setBusy] = useState(false);
    const [validateError, setValidateError] = useState(false);
    const [filterRefNoSelection, setFilterRefNoSelection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');
    const [disableReferenceNo, setDisableReferenceNo] = useState(true);
    const [disableDate, setDisableDate] = useState(true);
    const [cookies, setCookie] = useCookies(['activityright']);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await axios.get('/UserInfo/GetUser');
                handleAccessRights(response.data);
            } catch (error) {
                console.error("Failed to fetch user info", error);
            }
        };
        getUserInfo();
    }, []);

    const handleAccessRights = (data) => {
        let hasAccess = false;
        let hasSuperAccess = false;
        if (data.ActivityRight === 'Admin' || data.ActivityRight === 'SuperAdmin') {
            hasAccess = true;
        }
        if (data.ActivityRight === 'SuperAdmin') {
            hasSuperAccess = true;
        }
        setAccessRights({ hasAccess, hasSuperAccess });
    };

    const handleDateChange = (dates) => {
        setDateRange(dates);
        setDisableDate(false);
    };

    const handleFilterChange = (value) => {
        setDateFilterSelection(value);
        setDisableDate(value === '1');
    };

    const invalidateConfirm = () => {
        Modal.confirm({
            title: 'Are you sure you want to invalidate the selected order(s)?',
            onOk: () => invalidateProcess(),
        });
    };

    const invalidateProcess = async () => {
        console.log("Entered invalidate process method.");
        try {
            const response = await axios.post('/ReportingController/InvalidateOrderData', orderToInvalidate);
            if (response.data.length > 0) {
                notification.error({
                    message: 'Invalidate Error',
                    description: 'Failed to Invalidate following Service Request ID:' + response.data.join(','),
                });
            } else {
                searchReport(); // Replace with actual search function based on context
                notification.success({
                    message: 'Success',
                    description: 'Record(s) Invalidated Successfully',
                });
                setOrderToInvalidate([]);
                setInValidBtnEnable(true);
            }
        } catch (error) {
            console.error("Invalidate process failed", error);
        }
    };

    // You need to implement or adjust the searchReport() function based on the specific requirements and context.
    const searchReport = () => {
        console.log("Search report functionality goes here.");
    };

    const handleRefNoChange = (item) => {
        setFilterRefNoSelection(item);
        setDisableReferenceNo(item === '0');
    };

    return (
        <div>
            <div>
                Access Control: {accessRights.hasAccess ? 'You have access' : 'You do not have access'}
            </div>
            <div>
                Date Range: <RangePicker value={dateRange} onChange={handleDateChange} />
            </div>
            <div>
                Date Filter: <Select value={dateFilterSelection} style={{ width: 120 }} onChange={handleFilterChange}>
                    {dateFilterSelection.map(option => (
                        <Option key={option.value} value={option.value}>{option.title}</Option>
                    ))}
                </Select>
            </div>
            <Button disabled={inValidBtnEnable} onClick={invalidateConfirm}>Invalidate Selected</Button>
        </div>
    );
}

export default PsReportingComponent;
