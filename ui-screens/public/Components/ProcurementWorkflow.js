import StackedBarChart from './../Graphs/piechart';
export default function ProcurementWorkflowComp ()
{
  return (
    <>
      <div className="DevelopmentWorkflwoContainer">
        <p className="DevWorkFlowTxt">Develpoment WorkFlow</p>
        <p className="totalUseCAsesTxt">Total Usecases - 30</p>
        <p className="TaskComp">Task Completed - 44%</p>
        <p className="graph">
         <StackedBarChart/>
          {/* 44% */}
        </p>
      </div>
    </>
  );
}