import React from "react";
import { DataGrid } from '@material-ui/data-grid';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'jobName', headerName: 'Job name', width: 200 },
  { field: 'organization', headerName: 'Organization', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
  },
  {
    field: 'date',
    headerName: 'Data of application',
    width: 200,

  },
];
const rows = [
  { id: 1, jobName: 'Developer', organization: 'ItechArt', status: 'In review',date:'15-02-2020' },
  { id: 2, jobName: 'Qa', organization: 'ItechArt', status: 'In review',date:'15-02-2020' },
  { id: 3, jobName: 'Java Dev', organization: 'ItechArt', status: 'In review',date:'15-02-2020' },
  { id: 4, jobName: 'React Native', organization: 'ItechArt', status: 'In review',date:'15-02-2020'},
  { id: 5, jobName: 'Devops', organization: 'ItechArt', status: 'In review' ,date:'15-02-2020'},
  { id: 6, jobName: 'Melisandre', organization: 'ItechArt', status: 'In review' ,date:'15-02-2020'},
  { id: 7, jobName: 'Clifford', organization: 'ItechArt', status: 'In review' ,date:'15-02-2020'},
  { id: 8, jobName: 'Frances', organization: 'ItechArt', status: 'In review' ,date:'15-02-2020'},
  { id: 9, jobName: 'Roxie', organization: 'ItechArt', status: 'In review' ,date:'15-02-2020' },
];
const AppliedJobsTable = () => {
  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5}/>
      </div>
    </>
  )
}
export default AppliedJobsTable