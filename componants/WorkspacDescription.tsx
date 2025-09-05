import DescriptiveeContent from "@/componants/DescriptiveeContent";


const WorkSpaceDescription = () => {
  return (
    <div className="p-6">
      <DescriptiveeContent
        title="This is your main heading"
        subtitle="This is your Sub-Heading descriptive for topic"
        descriptionTitle="Overview"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in classical Latin literature from 45 BC..."
      />

      <br />

      {/* Another instance with different data */}
      <DescriptiveeContent
        title="Machine Learning Basics"
        // subtitle="Understanding the foundation of AI"
        description="Machine Learning is a subset of Artificial Intelligence that enables 
        systems to learn from data and improve without explicit programming..."
      />
    </div>
  );
}

export default WorkSpaceDescription
