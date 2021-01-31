import React, { PureComponent } from 'react'
import { Text, View, Button } from 'react-native'
import AllInOneSDKManager from 'paytm_allinone_react-native';

export default class App extends PureComponent {
  constructor(props) {
    super(props)
  }
  makePayment = () => {
    const mid = 'Darpit44126305327137'
    const orderId = '6db7544a-aed7-4765-9010-b018c3269c2'
    const tranxToken = '33a34b8f42b64650bd72f4a0bd422e47161211087427'
    const amount = "100"
    const callbackUrl = "https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=6db7544a-aed7-4765-9010-b018c3269c2"
    const isStaging = true
    const appInvokeRestricted  = true

    AllInOneSDKManager.startTransaction(
      orderId,
      mid,
      tranxToken,
      amount,
      callbackUrl,
      isStaging,
      appInvokeRestricted,
    )
      .then((result) => {
        console.log(result)
        // updateUI(result);
      })
      .catch((err) => {
        console.log(err)
        // handleError(err);
      });
  }
  render() {
    return (
      <View>
        <Button
          title="Testing 123"
          onPress={this.makePayment} />
      </View>
    )
  }
}
