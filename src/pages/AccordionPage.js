import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: 'jhhd',
            label: "Can I use React on a project?",
            content: "Yes, can be done.",
        },

        {
            id: 'ddhf',
            label: "Can Javascript be used for a project?",
            content: "Yes, feel free.",
        },

        {
            id: 'hpot',
            label: "How about using Angular on a project?",
            content: "Yes, Angular can be used.",
        },
    ];
    return (
        <Accordion items = {items}/>
    );
};

export default AccordionPage;