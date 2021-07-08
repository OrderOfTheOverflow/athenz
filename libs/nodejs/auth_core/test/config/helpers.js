/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var privateKey =
    'LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUVBcGZoVnhPT2VaQVhMNkxhYzY3dXFXaEF3cEV5ZzRLeTk4Z3FTQzdjZWxDWG1Xd1pOCk53UWs5cU1XSVNHRDZ3NSt4aW5OOUZ2YWtXRndsblJhY1JmaWtyUjdwd0hqYzgydHRVVW0wQWpxSVdYU3lHOWoKMzlhdXM0aFZuK2lCZjZWVFZWN0tyTVdQMnRkRDkybW4xdTJTM2lTcERWdjRLTXRZeWNvaGEwN2hVU1E1ZDM0UgpBQzVVbnpTKzZlTjF2RTRxOTNNMkdXSk1qcVVaZXQ1RHJwQVcrWElrUUpQWUY5eGJnTUFFWVFUWTltbHY1MUo5Cnd3SEJDS2lDNW9xNmJWVXlLOUNBay9qejJYSW5oRjB2T0RtQlJrYjA4eEFRMmpmc2NnVGRoSDNZenRYWEVrTlEKZFJlYVF0dWt3R3JLK0EvdGZBVFYvSWs5Tk14Um95V2FUd2o4MFFJREFRQUJBb0lCQUZTQ0lGb0NkSElGcVpBeQorNi9rZkpjalMwRTlhMlU3VC9SZ2dZREpteDVnTmV6L1JtM1BCR3M1RzFsL1VVWnN1UXg1Mk02bHZxTHI5SUlICmVNM0JGYk1SaHl6QWYycEZ2ajlnbUtTeEJWWkFISlhHY2hwVm05cjZmbTdQMnJCK0kvS0NNN3pKVTdoZ2g5RUEKMFY5VTFNV2I4U0JHUmhPdmh1UW9zZCtMNkpxQmYzOUkrN1BWdFRxNjZuNXVtWGU1WlU1eTJiMmRsSmRTU1hXeQpjc1BSMWUzT1IvTnM5dDVJTVdHcnR2VUowWHlWMjM3eENVM2tmOEg4aDA0NWd6eUdrZHE5djZIVHJhQzZMaTF5CmdwRDhVMFQ2VVQwWHBGcWowbGttTk1NcHNqOWw1QnVSR2ZPNjVhb0ZBOWl5S2xMdndaTnJ2YnNZL0UrNUJjRnMKQWNJczY2a0NnWUVBenAxU1VZZ2FGaWZFQnE3cGluNTY3S3FQemFCcURLYUZTekhkWnFsR1RDVzJ4bDJIY2J4YwpObWJseXUrU21rdzFQZGFlbzF3SXh3U052eU8xWTE1Y0pGbzBteUljUzZRZFJFZmhwWjU0dUdqOE9YQ0RzeW10Ci94TVEwVVlzdFJPaXhDVTlVL1lFdnh3TzlpUkRpU0VsdXd3cDBuN09LdjRRTTVxVkliMFdydjhDZ1lFQXphUDkKbW9ROFFDNS9mRlg0eE5tOFFGOXp5Ukc3SnRndysrNWJYbkFXVFgzcWpIaUxlQ1ZZdHpidlFVY1g0cFp5YlRqaAowYm5yUXpiZmJFVFFZMnk4ZGdqWTVjMEpPNmNTVm11QkE4Lzc4aHl4WUZTTzV0N01CSS93ak42aU80VWhHSGdKCnc3Q1VVM013RDMwWlNZQ3JwNDZyZE5yamdUc3dmN2crc3N1OUpDOENnWUJvMjFhbm9oYjdIM3RRbVB4VkdSTngKZ0s0eWdUTFE4TUc5QTdXRklHdFl3ZHNjbU9MZ1NlUFNpQzRlNjY3UE45WGRhRXBpUlpiK3ljVFdPRjBaN1ExKwpOWGwxTWI2Q2RPdVZkNVdBNUFnSUx0K3lsdk4vdmF0Y1JHVElrSUNuOVNzcHVHeURhOXZFMFl5V1Jwa3Z3dTdQCkdzRXUzc1BxOWIxck13eDBidTVRS1FLQmdBeU1TQ3BJaldDaE5iaEJpcmVBVGNOano2M2lQaGhGc3Q5OGtPaTMKVURVVVRONmJjRzg1WUN0MTE2MlZCL2tVa3hEbEdxcHdmTkdTSkpuM3JQdVVJLy9UMUdCWlhZbmRUUG9tL3kxYgpZSlZLZU94VzNJMXI1T2tXVzJoTklYc2VTWUd6dVd6T2RvNk5CYzY4SkhIZXZ4cXZVdmtEYmtSeGR5a2o5ZmQxCkJTcVRBb0dBVG1nZ05MQk5tNzh0ZWg1cGVyY2RTSXV2VWFMNzRzaXlKbFJlWW5ETitEeUQyUDMwaE9VVUVSYWEKVm9yaFlLdTdTdWVHclBhRy8vYWxZa3hGTGs1Q0RkVmovMWdaS3dTTWc0L3RaRm1yYXBOMFVmdDdGQkx1N1RYTApab1NSeVFsZFo0ZGRpR0xsQ1hlbGh4STdjSnJoQlN3UytYcVVPdnk0V29oYTdsYndYems9Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg--';
var publicKey =
    'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFwZmhWeE9PZVpBWEw2TGFjNjd1cQpXaEF3cEV5ZzRLeTk4Z3FTQzdjZWxDWG1Xd1pOTndRazlxTVdJU0dENnc1K3hpbk45RnZha1dGd2xuUmFjUmZpCmtyUjdwd0hqYzgydHRVVW0wQWpxSVdYU3lHOWozOWF1czRoVm4raUJmNlZUVlY3S3JNV1AydGREOTJtbjF1MlMKM2lTcERWdjRLTXRZeWNvaGEwN2hVU1E1ZDM0UkFDNVVuelMrNmVOMXZFNHE5M00yR1dKTWpxVVpldDVEcnBBVworWElrUUpQWUY5eGJnTUFFWVFUWTltbHY1MUo5d3dIQkNLaUM1b3E2YlZVeUs5Q0FrL2p6MlhJbmhGMHZPRG1CClJrYjA4eEFRMmpmc2NnVGRoSDNZenRYWEVrTlFkUmVhUXR1a3dHcksrQS90ZkFUVi9JazlOTXhSb3lXYVR3ajgKMFFJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg--';

module.exports = {
    privateKey: privateKey,
    publicKey: publicKey,
};
