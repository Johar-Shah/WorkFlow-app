'use client'
import Image from "next/image";
import ProcurementWorkflowComp from "./../../Components/ProcurementWorkflow";
import "../../../src/app/globals.css";
export default function WorkFlowUserScreen2() {
  return (
    <>
      <mian>
        <div className="workflowMGG">WorkFlow Management</div>
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
            <div className="ProcurementContainer">
              <ProcurementWorkflowComp />
              <ProcurementWorkflowComp />
            </div>
          </section>

          {/* decelopment workflwo */}
        </section>
        {/* Resource Pool */}
        <section className="ProcurementWorkflowSecRP">
          <div className="WorkFlowBtnsDst">
            <p className="PrcuWorkFlowTxt">Procurement Resoucres Pool</p>
            <button className="AddUseCasesResources">Add Resources</button>
          </div>

          {/* PM Section Edit */}
          <p className="ProjectManager">Project Manager</p>
          <div className="ProjectManagerSectionFlex">
            <div className="ContainerDivClass">
              <img src="./Images/profile1.svg" />
              <p className="AlexBentxt">Alex Ben</p>
              <p className="ProjectManagertxt">Project Manager</p>
            </div>
            <div className="ContainerDivClass">
              <img src="./Images/profile1.svg" />
              <p className="AlexBentxt">Jenner </p>
              <p className="ProjectManagertxt">Project Manager</p>
            </div>
            <div className="ContainerDivClass">
              <img src="./Images/profile1.svg" />
              <p className="AlexBentxt">Della Samantha</p>
              <p className="ProjectManagertxt">Project Manager</p>
            </div>
          </div>

          <p className="ProjectManager">UI Developer</p>
          <div className="ProjectManagerSectionFlex">
            <div className="ContainerDivClass">
              <img src="./Images/profile1.svg" />
              <p className="AlexBentxt">Alex Ben</p>
              {/* <p className="ProjectManagertxt">Project Manager</p> */}
            </div>
            <div className="ContainerDivClass">
              <img src="./Images/profile1.svg" />
              <p className="AlexBentxt">Jenner </p>
              {/* <p className="ProjectManagertxt">Project Manager</p> */}
            </div>
            <div className="ContainerDivClass">
              <img src="/Images/Profile.png" />
              <p className="AlexBentxt">Della Samantha</p>
              {/* <p className="ProjectManagertxt">Project Manager</p> */}
            </div>
          </div>
        </section>

        {/* Resource Pool */}
      </mian>
    </>
  );
}
