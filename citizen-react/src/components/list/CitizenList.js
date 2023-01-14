import React, {useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import {getCitizens, setCitizenList} from "../../store/features/CitizenSlice";
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
    await setFilterList(citizenList)
    console.log(filterList)
        if(id!=""){await filterId()}
        if(name!=""){await filterName()}
        if(isCitizen!=""){await filterCitizen()}
        if(hasDrivingLicense!=""){await filterLicense()}
            };

    const citizenListUpdate = useSelector((state) =>state.citizen.citizenListUpdate);
    const citizenList = useSelector((state) => state.citizen.citizenList);

    const[filterList, setFilterList] = useState(citizenList);
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
    }, [citizenListUpdate]);
    const onChangeName = (e) => {
    console.log(e.target.value);
        setName(e.target.value);

    }
     React.useEffect(() => {
            setFilterList(citizenList);
        }, [citizenList]);
    const filterName = (e) => {
        (setFilterList(citizenList.filter(x => x.name.includes(name))))
        };
    const filterId = (e) => {
        (setFilterList(citizenList.filter(x => x.id == id)))
        };
     const filterCitizen = (e) => {
             (setFilterList(citizenList.filter(x => x.isCitizen.toString() == isCitizen)))
         };
    const filterLicense = (e) => {
        (setFilterList(citizenList.filter(x => x.hasDrivingLicense.toString() == hasDrivingLicense)))
        };
//    React.useEffect(() => {
//            filterName();
//            console.log(citizenList)
//        }, [name]);
//
//        React.useEffect(() => {
//                filterId();
//            }, [id]);
//        React.useEffect(() => {
//                filterCitizen();
//            }, [isCitizen]);
//        React.useEffect(() => {
//                filterLicense();
//            }, [hasDrivingLicense]);
    return (
        <>
            <Form>
                <div className="card-body">
                    <form>
                        <div className="row mb-3">
                        <div className="col-md-2">
                                <div className="form-floating mb-3 mb-md-3">
                                    <input name="id" onChange={(e) => setId(e.target.value)}
                                            value={id}
                                            className="form-control" id="inputId" type="text"/>
                                    <label htmlFor="inputId">ID</label>
                                </div>
                            </div>
                            <div className="col-md-4">
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
                        rows={filterList}
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
                    <h3> Number of Records : {filterList.length}</h3>
                </div>
            </div>
        </>
    );
}

export default CitizenList;


