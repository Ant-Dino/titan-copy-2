import React, { useEffect, useState } from 'react';
import axios from 'axios';

type StatusItem = {
    Name: string;
    Active: boolean;
};

type ExceptionItem = {
    Exceptionid: string;
    ExceptionType: string;
    ExternalRefNum: string;
    MessageType: string;
    Status: { Name: string };
    LastModifiedDate: string;
    LastModifiedBy: string;
    Tenant: string;
    Notes: string;
};

const DashboardController: React.FC = () => {
    const [statusList, setStatusList] = useState<StatusItem[]>([]);
    const [exceptions, setExceptions] = useState<ExceptionItem[]>([]);
    const [isApplicationStatusDisabled, setIsApplicationStatusDisabled] = useState<boolean>(false);

    useEffect(() => {
        const getApplicationStatus = async () => {
            try {
                const response = await axios.get<StatusItem[]>('/ApplicationController/GetApplicationStatus/');
                setStatusList(response.data);
                const isAnyInactive = response.data.some(item => !item.Active);
                setIsApplicationStatusDisabled(isAnyInactive);
            } catch (error) {
                console.error("Unable to retrieve application information at this time.");
            }
        };

        const getExceptions = async () => {
            try {
                const response = await axios.get<ExceptionItem[]>('/ExceptionController/GetTEQExceptions');
                setExceptions(response.data);
            } catch (error) {
                console.error("There was an error Loading exceptions");
            }
        };

        getApplicationStatus();
        getExceptions();

        const interval = setInterval(() => {
            getApplicationStatus();
        }, 300000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <button disabled={isApplicationStatusDisabled}>Application Status</button>
            <div>
                {exceptions.map(exception => (
                    <div key={exception.Exceptionid}>
                        <h3>{exception.ExceptionType}</h3>
                        <p>{exception.ExternalRefNum}</p>
                        <p>{exception.MessageType}</p>
                        <p>{exception.Status.Name}</p>
                        <p>{exception.LastModifiedDate}</p>
                        <p>{exception.LastModifiedBy}</p>
                        <p>{exception.Tenant}</p>
                        <p>{exception.Notes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardController;