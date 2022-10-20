import { useState, useEffect } from 'react'
import Desktop from './desktop';
import Mobile from './mobile';
import {mobileCheck} from '../../lib/checkMobile'

type props = {
  title?: string;
  decription?: string;
  up?: number;
  down?: number;
}

function Card(props: props) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const status = mobileCheck()
    if(status) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [])
  return (<>
    {mobile ? (<><Mobile {...props}/></>) : (<><Desktop {...props}/></>)}
  </>)
}

export default Card