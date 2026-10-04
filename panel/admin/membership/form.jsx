import {
    DateTime,
    DialogForm,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        memberNumber
        required
    />
    <Text
        member
        required
    />
    <Text
        membershipType
        required
    />
    <DateTime
        required
        startDate
    />
    <DateTime endDate />
    <Select
        membershipStatus
        options={[
            'pending',
            'active',
            'suspended',
            'expired',
            'cancelled',
        ]}
        placeholder='state'
        required
    />
</>

export default <DialogForm inputs={inputs} />
