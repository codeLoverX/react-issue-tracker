
import { IssueList } from '@/components/issue/IssueList';
import dynamic from 'next/dynamic'
import Drawer from '@/components/layout/Drawer';
import Layout from '@/components/layout/Layout';
import { Pagination } from '@/components/sharing/table/Pagination';
import { useDataContext } from '@/context/data/provider';
import { useEffect } from 'react';
import Issues from '@/assets/data.json'
import { Modal } from '@/components/sharing/form';
import { Heading } from '@/components/sharing/typography/Heading';
import { useFeedbackContext } from '@/context/feedback/provider';
import { Button } from '@/components/sharing/form';
import { IssueForm } from '@/components/issue/IssueForm';
import { toggleModal } from '@/utils/modal';


export default function ProductPage() {
    const { setList, setCurrentIssue, issuePage, pageNumber, setPageDetails, limit } = useDataContext()
    const { setLoading } = useFeedbackContext()
    useEffect(() => {
        setTimeout(() => {
            setList(Issues);
            setLoading(false);
        }, 2000)
    }, [])
    return (
        <Layout>
            <main>
                <Modal id="form-modal">
                    <IssueForm />
                </Modal>
                <Drawer>
                    <div className="px-12 py-12">
                        <Heading classNames="flex">
                            <span>Issues List</span>
                        </Heading>
                        <div className='flex mb-4'>
                            <Button
                                classNames="inline mr-4 mt-1"
                                onClick={() => {
                                    toggleModal();
                                    setCurrentIssue(null);
                                }}
                            >
                                Add Issue
                            </Button>
                        </div>
                        <IssueList />
                        <div className="mt-4">
                            <Pagination
                                hasPrevPage={issuePage?.hasPrevPage}
                                hasNextPage={issuePage?.hasNextPage}
                                page={pageNumber}
                                totalPages={issuePage?.totalPages}
                                setPageDetails={setPageDetails}
                                limit={limit}
                            />
                        </div>
                    </div>
                </Drawer>
            </main>
        </Layout>
    )
}
