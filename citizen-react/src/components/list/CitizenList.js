import React from "react";
import {useDispatch , useSelector} from "react-redux";
import {DataGrid} from "@mui/x-data-grid";
import {getCitizens} from "../../store/features/CitizenSlice";

function CitizenList() {
    const dispatch = useDispatch();

    const citizenList = useSelector((state) => state.citizen.citizenList);
    const columns = [
        { field: 'id', headerName: 'ID', width: 100,},
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'isCitizen', headerName: 'Citizen', width: 150 },
        { field: 'hasDrivingLicense', headerName: 'Licence', width: 200 },
        { field: 'numberOfChildren', headerName: 'Children', width: 200 },
    ]
    const findAllCitizens = async () =>{
        const response = await dispatch(getCitizens());
    }
    React.useEffect(() => {
        findAllCitizens();
    }, [citizenList]);

    return (
        <>
            <div className="container">
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={citizenList}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        isCellEditable={(params) => params.row.age % 2 === 0}
                        experimentalFeatures={{ newEditingApi: true }}
                        disableMultipleSelection={true}
                    />
                </div>
            </div>
        </>
    );
}

export default CitizenList;


