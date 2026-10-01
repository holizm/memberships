import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.applicant?.title}</td>
    <td>{item.membershipType?.title}</td>
    <DateTime value={item.applicationDate} />
    <td>{item.membershipApplicationStatus}</td>
</>
