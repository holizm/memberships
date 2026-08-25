import {
    Boolean,
    DialogForm,
    LongText,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='membershipsCode'
        property='code'
        required
    />
    <Numeric
        placeholder='membershipsDurationDays'
        property='durationDays'
    />
    <Numeric
        placeholder='membershipsFee'
        property='fee'
    />
    <Text
        placeholder='membershipsCurrency'
        property='currency'
    />
    <Boolean
        placeholder='membershipsApprovalRequired'
        property='approvalRequired'
    />
    <LongText
        placeholder='coreDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
