import React from "react";
import {Document, Page, Text, View, renderToStream} from "@react-pdf/renderer";

const MonthReportTemplate = () => {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>dsadsadsa</Text>
                </View>
            </Page>
        </Document>
    )
}

export default async () => {
    return await renderToStream(<MonthReportTemplate/>);
}

