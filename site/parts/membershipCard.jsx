export default ({ membership }) => <article class='membershipCard'>
    <h2 class='type'>{membership.membershipType?.title}</h2>
    <span class='memberNumber'>{membership.memberNumber}</span>
    <time class='endDate'>{membership.endDate}</time>
    <span class='status'>{membership.membershipStatus}</span>
</article>
