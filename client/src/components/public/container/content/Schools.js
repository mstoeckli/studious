import React from 'react';

import { Identifier } from "../../../base/table/template/Identifier";
import { Number } from "../../../base/table/template/Number";
import { Button } from "../../../base/table/template/Button";
import { Email } from "../../../base/table/template/Email";
import { Status } from "../../../base/table/template/Status";

import { Table } from '../../../base/Table'

/** @public
 *  @constructor
 *  @returns {JSX.Element} Schools */
export const Schools = () => {
    return (
        <Table
            title="Schulen"
            sorting={true}
            searchable={true}
            favorite={false}
            grouping={false}
            groupColumn="school"
            // multiSelect={true}
            // linesPerPage={1}
            // paginationAlignment="right"
            showLineNumber={true}
            showContent={false}
            columns={[{
                title: "Schule",
                filterable: true,
                fixed: true
            }, {
                title: "Schul-Identifikation",
                filterable: true,
                fixed: true
            }, {
                title: "Partner-Projekt(e)",
                filterable: false,
                fixed: false,
                align: "center"
            }, {
                title: "Administrator",
                filterable: true,
                fixed: false
            }, {
                title: "Beitrittsdatum",
                filterable: true,
                fixed: false
            }, {
                title: "Klassen-Lehrer",
                filterable: false,
                fixed: false,
                align: "center"
            }, {
                title: "Fach-Lehrer",
                filterable: false,
                fixed: false,
                align: "center"
            }, {
                title: "Schüler",
                filterable: false,
                fixed: false,
                align: "center"
            }, {
                title: "Abonnement",
                filterable: true,
                fixed: false
            }]}
            rows={[[{
                jsx: <Identifier
                    icon="faMapPin"
                    title="Grundschule Fislisbach"
                    description="Feldstrasse 31g, 5442 Fislisbach, Switzerland" />,
                }, {
                    jsx: <Number numberValue="5230"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="hanspeter.mueller@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="10"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="6"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="85"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Free"
                        icon="faSackDollar"
                        borderColor="#d3366e"
                        backgroundColor="#d885a3" />
            }], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Niederrohrdorf"
                        description="Musterallee 14, 5442 Niederrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="6940"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Free"
                        icon="faSackDollar"
                        borderColor="#d3366e"
                        backgroundColor="#d885a3" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ], [
                {
                    jsx: <Identifier
                        icon="faMapPin"
                        title="Grundschule Oberrohrdorf"
                        description="Zur Gasse 4, 5443 Oberrohrdorf, Switzerland" />,
                }, {
                    jsx: <Number numberValue="3854"/>,
                }, {
                    jsx: <Button
                        text="Anfrage"
                        icon="faDiagramSubtask"/>,
                    align: "center"
                }, {
                    jsx: <Email address="fritz.muster@schule.ch" />,
                    align: "center"
                }, {
                    jsx: "31.12.2022"
                }, {
                    jsx: <Number
                        icon="faChalkboardUser"
                        numberValue="7"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faRectangleHistoryCircleUser"
                        numberValue="2"/>,
                    align: "center"
                }, {
                    jsx: <Number
                        icon="faScreenUsers"
                        numberValue="33"/>,
                    align: "center"
                }, {
                    jsx: <Status
                        title="Paid"
                        icon="faSackDollar"
                        borderColor="#5296db"
                        backgroundColor="#85aed8" />
                }
            ]]}/>
    );
}