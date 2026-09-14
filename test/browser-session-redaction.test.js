'use strict'; /*jslint node:true es9:true*/
import test from 'node:test';
import assert from 'node:assert/strict';
import {Browser_session} from '../browser_session.js';

const customer = 'hl_canary_customer';
const password = 'canary-zone-password-should-not-leak';
// port 1 is closed, so the connect fails offline in milliseconds
const cdp_endpoint = `wss://brd-customer-${customer}-zone-mcp_browser`
    +`:${password}@127.0.0.1:1`;

test('CDP connection failures never expose zone credentials', async()=>{
    const session = new Browser_session({cdp_endpoint});
    await assert.rejects(()=>session.get_browser({}), e=>{
        assert.doesNotMatch(e.message, new RegExp(password),
            'error message must not contain the zone password');
        assert.doesNotMatch(e.message, new RegExp(customer),
            'error message must not contain the customer id');
        assert.doesNotMatch(String(e.stack), new RegExp(password),
            'error stack must not contain the zone password');
        assert.match(e.message, /wss:\/\/\[REDACTED\]@127\.0\.0\.1:1/,
            'the endpoint host must survive redaction');
        return true;
    });
});
