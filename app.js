self.addEventListener("paymentrequest", event => {

    event.respondWith(
        Promise.resolve({
            methodName: event.methodData[0].supportedMethods,
            details: {
                status: "success"
            }
        })
    );

});