import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        applicant
        required
    />
    <Text
        membershipType
        required
    />
    <DateTime
        applicationDate
        required
    />
    <Select
        membershipApplicationStatus
        options={[
            'submitted',
            'underReview',
            'approved',
            'rejected',
            'withdrawn',
        ]}
        placeholder='state'
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
