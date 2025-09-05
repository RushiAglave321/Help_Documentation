import DescriptiveeContent from "@/componants/DescriptiveeContent";
import Note from "@/componants/Note";


const page = () => {
    return (
        <div className="p-6">
            <DescriptiveeContent
                title="Your Leftovers"
                subtitle="Do the Undone"
                descriptionTitle="Privious Drafts"
                description="Start working on the you remaing work or else simply delete it"
            />

            <Note>Your in the draft section</Note>
           
        </div>
    );
}

export default page
