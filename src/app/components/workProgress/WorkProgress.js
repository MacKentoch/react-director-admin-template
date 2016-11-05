import React from 'react';
import WorkProgressPanel from './workProgressPanel/WorkProgressPanel';
import WorkProgressTable from './workProgressTable/WorkProgressTable';
import WorkProgressHeader from './workProgressHeader/WorkProgressHeader';

const WorkProgress = () => {
  return (
    <WorkProgressPanel>
      <WorkProgressTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Project</th>
              <th>Manager</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Facebook</td>
              <td>Mark</td>
              <td>10/10/2014</td>
              <td><span className="label label-danger">in progress</span></td>
              <td><span className="badge badge-info">50%</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Twitter</td>
              <td>Evan</td>
              <td>10/8/2014</td>
              <td><span className="label label-success">completed</span></td>
              <td><span className="badge badge-success">100%</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Google</td>
              <td>Larry</td>
              <td>10/12/2014</td>
              <td><span className="label label-warning">in progress</span></td>
              <td><span className="badge badge-warning">75%</span></td>
            </tr>
            <tr>
              <td>4</td>
              <td>LinkedIn</td>
              <td>Allen</td>
              <td>10/01/2015</td>
              <td><span className="label label-info">in progress</span></td>
              <td><span className="badge badge-info">65%</span></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Tumblr</td>
              <td>David</td>
              <td>01/11/2014</td>
              <td><span className="label label-warning">in progress</span></td>
              <td><span className="badge badge-danger">95%</span></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Tesla</td>
              <td>Musk</td>
              <td>01/11/2014</td>
              <td><span className="label label-info">in progress</span></td>
              <td><span className="badge badge-success">95%</span></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Ghost</td>
              <td>XXX</td>
              <td>01/11/2014</td>
              <td><span className="label label-info">in progress</span></td>
              <td><span className="badge badge-success">95%</span></td>
            </tr>
          </tbody>
      </WorkProgressTable>
    </WorkProgressPanel>>
  );
};

export default WorkProgress;
