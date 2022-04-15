import MaterialTable from 'material-table';
import { data } from '../student-management/data';
console.log( data);
const StudentMainList = () => {
  const columns = [
    { title: 'Title', field: 'title' },
    { title: 'Author', field: 'authors' },
    { title: 'Page Count', field: 'num_pages' },
    { title: 'Rating', field: 'rating' }
  ];
      return (
        <div style={{ maxWidth: '100%' }}>
           <h2>hai</h2>
          <MaterialTable columns={columns} data={data} title='Books Directory' />
         
        </div>
      );
  };
  export default StudentMainList;