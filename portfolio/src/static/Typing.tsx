import { TypeAnimation } from 'react-type-animation';

function Typing (){

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Databricks',
        500, 
        'Amazon Web Services',
        500,
        'Microsoft Azure',
        500,
        'Apache Spark',
        500,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#84ffff", fontWeight: 'bold', display: 'inline-block', width: '70%'}}
      repeat={5}
    />
  );
};

export default Typing;