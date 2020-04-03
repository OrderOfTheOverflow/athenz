/*
 * Copyright 2020 Verizon Media
 *
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
package com.yahoo.athenz.zts.cert.impl;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.yahoo.athenz.auth.Principal;
import com.yahoo.athenz.auth.impl.SimplePrincipal;
import com.yahoo.athenz.common.server.ssh.SSHRecordStoreConnection;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static org.testng.Assert.assertNotNull;
import static org.testng.Assert.fail;

public class DynamoDBSSHRecordStoreTest {

    @Mock private AmazonDynamoDB dbClient;

    @BeforeMethod
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetConnection() {

        DynamoDBSSHRecordStore store = new DynamoDBSSHRecordStore(dbClient, "Athenz-ZTS-Table");

        SSHRecordStoreConnection dbConn = store.getConnection();
        assertNotNull(dbConn);

        // empty methods
        store.setOperationTimeout(10);
        store.clearConnections();
    }

    @Test
    public void testGetConnectionException() {

        // passing null for table name to get exception
        DynamoDBSSHRecordStore store = new DynamoDBSSHRecordStore(dbClient, null);

        try {
            store.getConnection();
            fail();
        } catch (Exception ignored) {
        }
    }

    @Test
    public void testLog() {

        DynamoDBSSHRecordStore store = new DynamoDBSSHRecordStore(dbClient, "Athenz-ZTS-Table");

        Principal principal = SimplePrincipal.create("user", "joe", "creds");

        // make sure no exceptions are thrown when processing log request

        store.log(principal, "10.11.12.13", "athenz.api", "1234");
    }
}
