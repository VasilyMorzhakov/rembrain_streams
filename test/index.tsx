import React from 'react';
import ReactDOM from 'react-dom';
import {OperatorDebug} from "../src"

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXbHpXa1BWaFZrVkpHdi1TSEJCMGpHZWh1WWZPSEVTLTdwc0hJbUJwdlJVIn0.eyJleHAiOjE2MzM2ODIzODMsImlhdCI6MTYzMzU5NTk4MywianRpIjoiZjcwOTU3YWEtZTRhZi00NWI1LTg4N2YtYzk2YWQ3ZjIzODdkIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnJlbWJyYWluLmFpOjg0NDMvYXV0aC9yZWFsbXMvaHR0cC1nYXRlIiwic3ViIjoiMzc2ZTI2YjMtZmMwOC00M2I5LWJiZTctMTkzYTljZDkwMTQ5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaHR0cC1nYXRlIiwic2Vzc2lvbl9zdGF0ZSI6IjdkZTlkYTY5LTkwZDYtNGJlNC04ZWE0LWNmY2YyMDVlMDk3YyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9hdXRoLnJlbWJyYWluLmllOjg0NDMvIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJhZG1pbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiN2RlOWRhNjktOTBkNi00YmU0LThlYTQtY2ZjZjIwNWUwOTdjIiwidXBuIjoidGVzdCIsImFkZHJlc3MiOnt9LCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6InRlc3QgdGVzdCIsImdyb3VwcyI6WyJhZG1pbiJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0IiwiZ2l2ZW5fbmFtZSI6InRlc3QiLCJmYW1pbHlfbmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIn0.oXrpIDzxf92jzsoyUpcXg9H0DtMT2m6kAfebRmaKUiltO0gL-90lR9QwLCmXmSrsI-hCTb8MsQwqkatTPEnKJV2mTKqAnp3WOGwR4oi2QUhOXDqCFpDxoR7GyCPN3I4MgMi2xm2FtUlHaDDOKidBVaL28mtjUlq6fqVJzDxzVeMFlBcREP7ME3CR1_XVVmmSCgwc1SLcezkFy4mZ_tzmmq6ZNbm2NkGiC89FrGGz7gjGoymX-odVFPSfXN-jO4u20B8-xzIRPwkIqlippIm-3jbUJKkblor1DgWECGk3mzseH0V1NcymHSZvjj8GKc6zpHV51ME00GhZ0xHyDDI7MQ"

ReactDOM.render(
    <OperatorDebug
        accessToken={token}
        dataWSUrl="wss://monitor.rembrain.ai:5443"
        robotName="aivero_xarm2"/>,
    document.getElementById('root-debug')
);