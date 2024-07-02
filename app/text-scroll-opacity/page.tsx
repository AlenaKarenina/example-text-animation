import Paragraph from '@/components/paragraph/Paragraph'
import { PARAGRAPHS_MOCKS } from '@/components/paragraph/Paragraph.mock'
import lcs from './page.module.scss'

export default function Page() {

  return (
    <div className={lcs.container}>
      <Paragraph text={PARAGRAPHS_MOCKS}/>
      {/*<Character paragraph={paragraph} />*/}
    </div>
  )
}
