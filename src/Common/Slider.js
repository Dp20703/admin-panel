import React from 'react'

const Slider = () => {
    return (
        <><Main /></>
    )
}

function Main() {

    return (
        <>
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{ border: "0" }}>
                        <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Admin</span></a>
                    </div>
                    <div className="clearfix"></div>

                    {/* <!-- menu profile quick info --> */}
                    <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>Admin</h2>
                        </div>
                    </div>
                    {/* <!-- /menu profile quick info --> */}
                    <br />
                    {/* <!-- sidebar menu --> */}
                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <h3>General</h3>
                            <ul className="nav side-menu">
                                <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="index.html">Dashboard</a></li>
                                        <li><a href="index2.html">Dashboard2</a></li>
                                        <li><a href="index3.html">Dashboard3</a></li>
                                    </ul>
                                </li>


                                <li><a><i className="fa fa-table"></i> Tables <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="tables.html">Tables</a></li>
                                        <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                                    </ul>
                                </li>
                                <li><a><i className="fa fa-bar-chart-o"></i> Data Presentation <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="chartjs.html">Chart JS</a></li>
                                        <li><a href="chartjs2.html">Chart JS2</a></li>
                                        <li><a href="morisjs.html">Moris JS</a></li>
                                        <li><a href="echarts.html">ECharts</a></li>
                                        <li><a href="other_charts.html">Other Charts</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>


                    </div>
                    {/* <!-- /sidebar menu --> */}

                    {/* <!-- /menu footer buttons --> */}
                    <div className="sidebar-footer hidden-small">
                        <a data-toggle="tooltip" data-placement="top" title="Settings">
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Lock">
                            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </a>
                    </div>
                    {/* <!-- /menu footer buttons --> */}
                </div>
            </div>


        </>
    );

}
export default Slider