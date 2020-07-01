// export default () => <div> welcome to next !</div>
import React from 'react'
import Head from 'next/head'

// export default () =>
//   <div>
//     <Head>
//       <title>页面标题</title>
//       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//     </Head>
//     <p>hello world</p>
//   </div>
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
      </div>
    )
  }
}