import { DateTime } from 'list'

export default item => <>
    <td>{item.memberNumber}</td>
    <td>{item.member?.title}</td>
    <td>{item.membershipType?.title}</td>
    <DateTime value={item.endDate} />
    <td>{item.membershipStatus}</td>
</>
