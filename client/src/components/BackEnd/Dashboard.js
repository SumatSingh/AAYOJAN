import React, { Component, Fragment } from 'react'

export default class Dashboard extends Component {
  render() {
    return (

      <Fragment>

  {/* start */}
            
  <div>mt-5</div>
            <div>mt-5</div>
            <div>mt-5</div>   {/*for margin top full page */}
           
            {/* end  */}



<section className='mt-5'>
<div className=" box-container">


{/*header start*/}
        <div>
          <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="index3.html" className="nav-link">Home</a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
            {/* SEARCH FORM */}
            <form className="form-inline ml-3">
              <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
              {/* Messages Dropdown Menu */}
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                  <i className="far fa-comments" />
                  <span className="badge badge-danger navbar-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                      <img src="dist/img/client_pic2.jpeg" className="img-size-50 mr-3 img-circle" />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          Arun chourasiya
                          <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                      </div>
                    </div>
                    {/* Message End */}
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                      <img src="dist/img/adhira.jpg" className="img-size-50 img-circle mr-3" />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          Jeetendra Yadav
                          <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">I got your message bro</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                      </div>
                    </div>
                    {/* Message End */}
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                      <img src="dist/img/client_pic4.jpeg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          Ravi Patel
                          <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">The subject goes here</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                      </div>
                    </div>
                    {/* Message End */}
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                </div>
              </li>
              {/* Notifications Dropdown Menu */}
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                  <i className="far fa-bell" />
                  <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span className="dropdown-item dropdown-header">15 Notifications</span>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-envelope mr-2" /> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-users mr-2" /> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-file mr-2" /> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                  <i className="fas fa-th-large" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/*Header end*/}


        {/*menu start*/}

        <div className=''>
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
              <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
              <span className="brand-text font-weight-light">Evento</span>
            </a>

            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
      
              <div className="user-panel mt-2 pb-1 mb-1 d-flex">
                <div className="image mt-5 p-3">
                  <img src="dist/img/sumat.png" className="mt-5 p-3 h-75 w-50" alt="" />
                </div>
                {/* <div className="info mt-5 p-0">
                  <a href="#" className="d-block text-decoration-none mt-5 fs-3">Hello......</a>
                </div> */}
              </div>
              {/* Sidebar Menu    Alexander Pierce*/}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                  <li className="nav-item has-treeview menu-open">
                    <a href="#" className="nav-link active">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>
                        Dashboard
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="./index.html" className="nav-link active">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index3.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v3</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li> */}

                  {/* <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                Layout Options
                <i className="fas fa-angle-left right" />
                <span className="badge badge-info right">6</span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/layout/top-nav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/boxed.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Boxed</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-topnav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Navbar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-footer.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Footer</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Collapsed Sidebar</p>
                </a>
              </li>
            </ul>
          </li> */}

                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie" />
                      <p>
                        ManageEvent
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/charts/chartjs.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>ChartJS</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/flot.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Flot</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/inline.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Inline</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie" />
                      <p>
                        ManageServices
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/charts/chartjs.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>ChartJS</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/flot.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Flot</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/inline.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Inline</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-tree" />
                      <p>
                        Booking Management
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/UI/general.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>General</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/icons.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Icons</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/buttons.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Buttons</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/sliders.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Sliders</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/modals.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Modals &amp; Alerts</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/navbar.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Navbar &amp; Tabs</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/timeline.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Timeline</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/ribbons.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Ribbons</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-edit" />
                      <p>
                        Compney
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/forms/general.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>General Elements</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/forms/advanced.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Advanced Elements</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/forms/editors.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Editors</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        User Management
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Simple Tables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>DataTables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/jsgrid.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>jsGrid</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        Reports
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Simple Tables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>DataTables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/jsgrid.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>jsGrid</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        Contact Author
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Simple Tables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>DataTables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/jsgrid.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>jsGrid</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        Other Project
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Simple Tables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>DataTables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/jsgrid.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>jsGrid</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
        </div>

        {/*menu end*/}





        {/* Dashbord start */}
        <div>
          <div className="content-wrapper">{/**/}
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Dashboard</h1>
                  </div>{/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                  </div>{/* /.col */}
                </div>{/* /.row */}
              </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}

            {/* Main content */}
            <section className="content">
              <div className="container-fluid">

                {/* Small boxes (Stat box) */}
                <div className="row">

                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-info">
                      <div className="inner">
                        <h3>2</h3>
                        <p>Total New Booking</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag" />
                      </div>
                      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                  </div>

                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-success">
                      <div className="inner">
                        <h3>3{/*<sup style={{fontSize: 20}}>%</sup>*/}</h3>
                        <p>Total Approved Booking</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars" />
                      </div>
                      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-warning">
                      <div className="inner">
                        <h3>44</h3>
                        <p>User Registrations</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add" />
                      </div>
                      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3>65</h3>
                        <p>Unique Visitors</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph" />
                      </div>
                      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                  {/* ./col */}
                </div>
                {/* /.row */}
                {/* Main row */}
                <div className="row">
                  {/* Left col */}
                  <section className="col-lg-7 connectedSortable">
                    {/* Custom tabs (Charts with tabs)*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="fas fa-chart-pie mr-1" />
                          Sales
                        </h3>
                        <div className="card-tools">
                          <ul className="nav nav-pills ml-auto">
                            <li className="nav-item">
                              <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                            </li>
                          </ul>
                        </div>
                      </div>{/* /.card-header */}
                      <div className="card-body">
                        <div className="tab-content p-0">
                          {/* Morris chart - Sales */}
                          <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: 300 }}>
                            <canvas id="revenue-chart-canvas" height={300} style={{ height: 300 }} />
                          </div>
                          <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: 300 }}>
                            <canvas id="sales-chart-canvas" height={300} style={{ height: 300 }} />
                          </div>
                        </div>
                      </div>{/* /.card-body */}
                    </div>
                    {/* /.card */}
                    {/* DIRECT CHAT */}
                    <div className="card direct-chat direct-chat-primary">
                      <div className="card-header">
                        <h3 className="card-title">Direct Chat</h3>
                        <div className="card-tools">
                          <span data-toggle="tooltip" title="3 New Messages" className="badge badge-primary">3</span>
                          <button type="button" className="btn btn-tool" data-card-widget="collapse">
                            <i className="fas fa-minus" />
                          </button>
                          <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                            <i className="fas fa-comments" />
                          </button>
                          <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        {/* Conversations are loaded here */}
                        <div className="direct-chat-messages">
                          {/* Message. Default to the left */}
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">Alexander Pierce</span>
                              <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img className="direct-chat-img" src="dist/img/client_pic2.jpeg" alt="message user image" />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              Is this template really for free? That's unbelievable!
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message to the right */}
                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">Sarah Bullock</span>
                              <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img className="direct-chat-img" src="dist/img/client_pic3.jpeg" alt="message user image" />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              You better believe it!
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message. Default to the left */}
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">Alexander Pierce</span>
                              <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img className="direct-chat-img" src="dist/img/client_pic1.jpg" alt="message user image" />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              Working with AdminLTE on a great new app! Wanna join?
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message to the right */}
                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">Sarah Bullock</span>
                              <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img className="direct-chat-img" src="dist/img/client_pic4.jpeg" alt="message user image" />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              I would love to.
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                        </div>
                        {/*/.direct-chat-messages*/}
                        {/* Contacts are loaded here */}
                        <div className="direct-chat-contacts">
                          <ul className="contacts-list">
                            <li>
                              <a href="#">
                                <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Count Dracula
                                    <small className="contacts-list-date float-right">2/28/2015</small>
                                  </span>
                                  <span className="contacts-list-msg">How have you been? I was...</span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Sarah Doe
                                    <small className="contacts-list-date float-right">2/23/2015</small>
                                  </span>
                                  <span className="contacts-list-msg">I will be waiting for...</span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Nadia Jolie
                                    <small className="contacts-list-date float-right">2/20/2015</small>
                                  </span>
                                  <span className="contacts-list-msg">I'll call you back at...</span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Nora S. Vans
                                    <small className="contacts-list-date float-right">2/10/2015</small>
                                  </span>
                                  <span className="contacts-list-msg">Where is your new...</span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    John K.
                                    <small className="contacts-list-date float-right">1/27/2015</small>
                                  </span>
                                  <span className="contacts-list-msg">Can I take a look at...</span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Kenneth M.
                                    <small className="contacts-list-date float-right">1/4/2015</small>
                                  </span>
                                  <span className="contacts-list-msg">Never mind I found...</span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                          </ul>
                          {/* /.contacts-list */}
                        </div>
                        {/* /.direct-chat-pane */}
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <form action="#" method="post">
                          <div className="input-group">
                            <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                            <span className="input-group-append">
                              <button type="button" className="btn btn-primary">Send</button>
                            </span>
                          </div>
                        </form>
                      </div>
                      {/* /.card-footer*/}
                    </div>
                    {/*/.direct-chat */}
                    {/* TO DO List */}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="ion ion-clipboard mr-1" />
                          To Do List
                        </h3>
                        <div className="card-tools">
                          <ul className="pagination pagination-sm">
                            <li className="page-item"><a href="#" className="page-link">«</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">»</a></li>
                          </ul>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <ul className="todo-list" data-widget="todo-list">
                          <li>
                            {/* drag handle */}
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            {/* checkbox */}
                            <div className="icheck-primary d-inline ml-2">
                              <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                              <label htmlFor="todoCheck1" />
                            </div>
                            {/* todo text */}
                            <span className="text">Design a nice theme</span>
                            {/* Emphasis label */}
                            <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small>
                            {/* General tools such as edit or delete*/}
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                              <label htmlFor="todoCheck2" />
                            </div>
                            <span className="text">Make the theme responsive</span>
                            <small className="badge badge-info"><i className="far fa-clock" /> 4 hours</small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
                              <label htmlFor="todoCheck3" />
                            </div>
                            <span className="text">Let theme shine like a star</span>
                            <small className="badge badge-warning"><i className="far fa-clock" /> 1 day</small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                              <label htmlFor="todoCheck4" />
                            </div>
                            <span className="text">Let theme shine like a star</span>
                            <small className="badge badge-success"><i className="far fa-clock" /> 3 days</small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
                              <label htmlFor="todoCheck5" />
                            </div>
                            <span className="text">Check your messages and notifications</span>
                            <small className="badge badge-primary"><i className="far fa-clock" /> 1 week</small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
                              <label htmlFor="todoCheck6" />
                            </div>
                            <span className="text">Let theme shine like a star</span>
                            <small className="badge badge-secondary"><i className="far fa-clock" /> 1 month</small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer clearfix">
                        <button type="button" className="btn btn-info float-right"><i className="fas fa-plus" /> Add item</button>
                      </div>
                    </div>
                    {/* /.card */}
                  </section>
                  {/* /.Left col */}
                  {/* right col (We are only adding the ID to make the widgets sortable)*/}
                  <section className="col-lg-5 connectedSortable">
                    {/* Map card */}
                    <div className="card bg-gradient-primary">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="fas fa-map-marker-alt mr-1" />
                          Visitors
                        </h3>
                        {/* card tools */}
                        <div className="card-tools">
                          <button type="button" className="btn btn-primary btn-sm daterange" data-toggle="tooltip" title="Date range">
                            <i className="far fa-calendar-alt" />
                          </button>
                          <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fas fa-minus" />
                          </button>
                        </div>
                        {/* /.card-tools */}
                      </div>
                      <div className="card-body">
                        <div id="world-map" style={{ height: 250, width: '100%' }} />
                      </div>
                      {/* /.card-body*/}
                      <div className="card-footer bg-transparent">
                        <div className="row">
                          <div className="col-4 text-center">
                            <div id="sparkline-1" />
                            <div className="text-white">Visitors</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <div id="sparkline-2" />
                            <div className="text-white">Online</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <div id="sparkline-3" />
                            <div className="text-white">Sales</div>
                          </div>
                          {/* ./col */}
                        </div>
                        {/* /.row */}
                      </div>
                    </div>
                    {/* /.card */}
                    {/* solid sales graph */}
                    <div className="card bg-gradient-info">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="fas fa-th mr-1" />
                          Sales Graph
                        </h3>
                        <div className="card-tools">
                          <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                            <i className="fas fa-minus" />
                          </button>
                          <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <canvas className="chart" id="line-chart" style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }} />
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer bg-transparent">
                        <div className="row">
                          <div className="col-4 text-center">
                            <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                            <div className="text-white">Mail-Orders</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                            <div className="text-white">Online</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                            <div className="text-white">In-Store</div>
                          </div>
                          {/* ./col */}
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.card-footer */}
                    </div>
                    {/* /.card */}
                    {/* Calendar */}
                    <div className="card bg-gradient-success">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="far fa-calendar-alt" />
                          Calendar
                        </h3>
                        {/* tools card */}
                        <div className="card-tools">
                          {/* button with a dropdown */}
                          <div className="btn-group">
                            <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                              <i className="fas fa-bars" /></button>
                            <div className="dropdown-menu float-right" role="menu">
                              <a href="#" className="dropdown-item">Add new event</a>
                              <a href="#" className="dropdown-item">Clear events</a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">View calendar</a>
                            </div>
                          </div>
                          <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                            <i className="fas fa-minus" />
                          </button>
                          <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                            <i className="fas fa-times" />
                          </button>
                        </div>
                        {/* /. tools */}
                      </div>
                      {/* /.card-header */}
                      <div className="card-body pt-0">
                        {/*The calendar */}
                        <div id="calendar" style={{ width: '100%' }} />
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </section>
                  {/* right col */}
                </div>
                {/* /.row (main row) */}
              </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
        </div>
        {/*Dashboar end*/}



        {/*footer start*/}

        <div>
          <footer className="main-footer">
            <strong>Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
              <b>Version</b> 3.0.0
            </div>
          </footer>
        </div>

        {/*footer end*/}

        </div>
        </section>
      </Fragment>

    )
  }
}
