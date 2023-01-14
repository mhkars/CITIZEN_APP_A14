import React, {useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import {getCitizens} from "../../store/features/CitizenSlice";
import {Form} from "react-bootstrap";
import {DataGrid} from "@mui/x-data-grid";
import {FormControl, InputLabel, MenuItem, Select, TextField, Button} from "@mui/material";

function CitizenList() {
    const [isCitizen, setIsCitizen] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [hasDrivingLicense, setHasDrivingLicense] = useState("");
    const [numberOfChildren, setNumberOfChildren] = useState("");
    const dispatch = useDispatch();
    const search = async (e) => {
        e.preventDefault();
        const search = {
            id,
            isCitizen,
            name,
            hasDrivingLicense,
            numberOfChildren,
        };
        dispatch(getCitizens(search));
    };

    const citizenListUpdate = useSelector((state) =>state.citizen.citizenListUpdate);
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
            <Form>
                <div className="card-body">
                    <form>
                        <div className="row mb-3">
                        <div className="col-md-1">
                                <div className="form-floating mb-3 mb-md-3">
                                    <input name="id" onChange={(e) => setId(e.target.value)}
                                            value={id}
                                            className="form-control" id="inputId" type="text"/>
                                    <label htmlFor="inputId">ID</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-floating mb-3 mb-md-3">
                                    <input name="name" onChange={(e) => setName(e.target.value)}
                                            value={name}
                                            className="form-control" id="inputName" type="text"/>
                                    <label htmlFor="inputName">Name</label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-floating mb-3 mb-md-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Has Licence</InputLabel>
                                        <Select
                                            defaultValue=""
                                            id="grouped-select" label="Grouping"
                                            labelId="demo-simple-select-label"
                                            onChange={(e) => setHasDrivingLicense(e.target.value)}
                                        >
                                            <MenuItem value={"true"}>True</MenuItem>
                                            <MenuItem value={"false"}>False</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-floating mb-3 mb-md-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Is
                                            Citizen</InputLabel>
                                        <Select
                                            defaultValue=""
                                            id="grouped-select" label="Grouping"
                                            labelId="demo-simple-select-label"
                                            onChange={(e) => setIsCitizen(e.target.value)}
                                        >
                                            <MenuItem value={"true"}>True</MenuItem>
                                            <MenuItem value={"false"}>False</MenuItem>
                                        </Select>
                                    </FormControl>
                            </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-floating mb-3 mb-md-3">
                                    <FormControl fullWidth>
                                    <TextField
                                        id="outlined-number"
                                        type="number"
                                        placeholder=" Children"
                                        onChange={(e) => setNumberOfChildren(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-md-2" style={{ marginTop: "8px" }}>
                                <Button variant="contained" onClick={search}>
                                    Search
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Form>
            <div className="container">
                <div style={{ height: 350, width: '100%' }}>
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
            <div className="container">
                <div style={{ marginTop:"10px"}}>
                    <h3> Number of Records :</h3>
                </div>
            </div>
        </>
    );
}

export default CitizenList;


