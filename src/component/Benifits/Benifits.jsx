import Image from 'next/image';
import React from 'react'
import BoxImage from "../../../public/images/nature.png"
import "../Benifits/benifits.css"


const Benifits = () => {
  return (<div className='benfitboxx'>

    <div className='benDiv'>
      <h2>BENEFITS</h2>
      <div>Let’s make your ideas break through</div>
    </div>

    <div className='benfitsboxs'>
      <div>
        <span>
        <Image src={BoxImage} alt="" />
        </span>
        <h3>Best quality or nothing</h3>
        <span>Download scroll-stopping images of the highest quality to make professional designs.

</span>
      </div>
      <div>
        <span>
        <Image src={BoxImage} alt="" />
        </span>
        <h3>Best quality or nothing</h3>
        <span>Download scroll-stopping images of the highest quality to make professional designs.

</span>
      </div>
      <div>
        <span>
        <Image src={BoxImage} alt="" />
        </span>
        <h3>Best quality or nothing</h3>
        <span>Download scroll-stopping images of the highest quality to make professional designs.

</span>
      </div>
      <div>
        <span>
        <Image src={BoxImage} alt="" />
        </span>
        <h3>Best quality or nothing</h3>
        <span>Download scroll-stopping images of the highest quality to make professional designs.

</span>
      </div>
    </div>
  </div>
  )
}

export default Benifits;