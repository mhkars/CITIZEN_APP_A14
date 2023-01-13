import {Grid} from "@mui/material";
import CitizenList from "../../list/CitizenList";

function HomePage() {
    return (
        <>
        <body className="sb-nav-fixed"  style={{ height: "100%", width: "100%", 
        backgroundImage: `url("https://img.freepik.com/premium-vector/global-network-connection-world-map-point_41981-1354.jpg?w=2000")`}}>
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-1">
                        <Grid container spacing={2}>
                            <Grid Grid item xs={10}>
                                <br/>
                                <div className="card"
                                     style={{width: "100%", marginTop: "-40px", backgroundColor: "black"}}>
                                    <h1 className="mt-4 h2" style={{
                                        color: "white",
                                        fontFamily: 'Raleway',
                                    }}>D14 CITIZEN APP</h1>
                                    <div className="card-body"
                                         style={{margin: "20px", padding: "20px",  backgroundColor: "white" }}>
                                        <CitizenList style={{width: "100%"}}></CitizenList>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                </main>
            </div>
        </div>
        </body>
        </>
    )
}

export default HomePage