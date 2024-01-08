'use client'
import StackedBarChart from './../../Graphs/BarChart';
// import    "../../../src/app/globals.css";
import Image from "next/image";
import "../../../src/app/globals.css";
import ProcurementWorkflowComp from './../../Components/ProcurementWorkflow';
// import addWorkFlow from './../WorkFlowList-1/Popups';
import Projectmanager from './../WorkFlowList-2/PopupsListOfPM';
export default function WorkFlowUserScreen() {
  return (
    <>
      <mian className="mainscrclr">
        <div className="workflowMGG ">WorkFlow Management </div>
        <div className="ProcurOvrRP">
          <div className="PRCRescrPoolBtn">
            <div className="PRCRescrPoolBtn">Procurement Overview</div>
            <div className="PRCRescrPoolBtn1">Resource Pool</div>
          </div>
        </div>
        {/* why its make a section here why noyt the button or something else */}
        <section className="rexWorkFlow">
          <div className="PrcSol">Procurement Solution</div>
          <div className="cretaedByPM">Created By Siddhesh.D</div>
          <p className="ProvuideGoodsSercices">
            Procurement is the systematic process of identifying, acquiring, and
            managing the goods, services, or works needed by an organization to
            meet its operational requirements.
          </p>
        </section>

        {/* Procurement Workflow */}
        <section className="ProcurementWorkflowSec">
          <div className="WorkFlowBtnsDst">
            <p className="PrcuWorkFlowTxt">Procurement Workflows</p>
            <div className="workflowbuttons">
              <button className="AddUseCases">Add Workflow </button>
              <button className="AddUseCases">Add Usecase </button>
            </div>
          </div>
          {/* decelopment WorkFlow */}
          <section className="GrapohhsDeveWorkflwo">
            <ProcurementWorkflowComp />
            <ProcurementWorkflowComp />
          </section>
          {/* decelopment workflwo */}
          {/* Graph Sections */}
          <section className="ProcurementWorkflowSecGraph">
            <div className="WorkFlowBtnsDst">
              <p className="PrcuWorkFlowTxt">Procurement Workflows</p>
              <button className="AddSelect">
                Monthly{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M4 6.5L8 10.5L12 6.5"
                    stroke="#8C8C8C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="REsoucresPool">Resources working on Procurement</p>

            <div className="GaphnleftSection">
              <p className="GrphnTxtFlex1">
                <span>
                  <img src="./Images/graphpointdarkblue.png" />
                </span>
                Pending Task
              </p>
              <p className="GrphnTxtFlex">
                <span>
                  <img src="./Images/graphpointdarkblue.png" />
                </span>
                In Progress Tak
              </p>
              <p className="GrphnTxtFlex">
                <span>
                  <img src="./Images/graphpointdarkblue.png" />
                </span>
                Completed Task
              </p>
            </div>
          </section>
          <StackedBarChart />
        </section>
      </mian>
    </>
  );
}
