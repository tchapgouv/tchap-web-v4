import { act, logRoles, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { flushPromises, stubClient } from 'matrix-react-sdk/test/test-utils';
import { Mocked, mocked } from 'jest-mock';

import TchapRedListSettings from '~tchap-web/src/tchap/components/views/settings/tabs/user/TchapRedListSettings';
import { MatrixClient } from 'matrix-js-sdk/src/matrix';
import TchapUtils from '~tchap-web/src/tchap/util/TchapUtils';
import userEvent from '@testing-library/user-event';

jest.mock("~tchap-web/src/tchap/util/TchapUtils");

describe("TchapRedListSettings", () => {
    let client: Mocked<MatrixClient>;

    const renderComponent = () => render(<TchapRedListSettings />);

    beforeEach(() => {
        client = mocked(stubClient());
    });


    it("should red list should be activated when initial value is true", async () => { 
        mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(true);
        mocked(TchapUtils.setUserRedListInfo).mockResolvedValue();

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        expect(switchElm).toHaveAttribute('aria-checked', "true");

    });
    
    it("should red list should be desactivated when initial value is false", async () => { 
        mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(false);
        mocked(TchapUtils.setUserRedListInfo).mockResolvedValue();

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        expect(switchElm).toHaveAttribute('aria-checked', "false");
    });


    it("should remove user from red list", async () => { 
        // initial value
        mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(true);
        mocked(TchapUtils.setUserRedListInfo).mockResolvedValue();

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        act(() => {
            userEvent.click(switchElm);
        })
        
        waitFor(() => {
            expect(switchElm).toHaveAttribute('aria-checked', "false");
        })
    });

    it("should put user on red list", async () => {
        // initial value
        mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(false);
        mocked(TchapUtils.setUserRedListInfo).mockResolvedValue();

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        act(() => {
            userEvent.click(switchElm);
        })

        waitFor(() => {
            expect(switchElm).toHaveAttribute('aria-checked', "true");
        })
    });
    
    it("should get back to initial value if throws an error", async () => {
        // initial value
        mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(false);
        mocked(TchapUtils.setUserRedListInfo).mockRejectedValue(new Error("error test"));

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        act(() => {
            userEvent.click(switchElm);
        })
        waitFor(() => {
            expect(switchElm).toHaveAttribute('aria-checked', "false");
        });
    });
});
