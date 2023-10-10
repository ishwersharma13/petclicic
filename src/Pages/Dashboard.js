import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PetListing from "../component/PetListing";
import ServiceList from "../component/ServiceList";
import Sidebar from "./Sidebar";
import pet from "../Assets/dog.jpg";
import service from "../Assets/features.webp";
import Topmenu from "./Topmenu";

function Dashboard() {
  return (
    <div>
      <Sidebar></Sidebar>
      <section className="home-section">
        <Topmenu />
        <div className="d-wrap">
          <div className="container">
            <div className="grid">
              <div className="pet-grid">
                <Link to="/petmanagement">
                  <div>
                    <h4>Pet </h4>
                    <p>Management</p>
                  </div>

                  <img style={{ borderRadius: '50px' }} width='100x' height='100x' src={pet} alt="pet" />
                </Link>
              </div>


              <div className="service-grid">
                <Link to="/services">
                  <div>
                    <h4>Service </h4>
                    <p>Management</p>
                  </div>
                  <img style={{ borderRadius: '50px' }} width='100x' height='100x' src={service} alt="service" />
                </Link>
              </div>

            </div>
          </div>
          <div className="listings">
            <PetListing></PetListing>
            <ServiceList></ServiceList>

          </div>

        </div>
      </section>
    </div>
  );
}

export default Dashboard;
