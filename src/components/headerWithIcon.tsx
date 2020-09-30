import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
export default function HeaderWithIcon(props: { children: React.ReactNode, icon?: IconDefinition }) {
  return (
    <div style={{ display: "flex", width: "100%", padding: "10px", alignItems: "center" }}>
      <Link href="/" shallow>
        <div>
          <FontAwesomeIcon icon={props.icon || faArrowLeft} size="2x" style={{ marginRight: "10px" }} />
        </div>
      </Link>
      {props.children}
    </div>
  )
}