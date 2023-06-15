
import { IssueList } from '@/components/issue/IssueList';
import Drawer from '@/components/layout/Drawer';
import Layout from '@/components/layout/Layout';
import { useDataContext } from '@/context/data/provider';
import { useEffect } from 'react';


export default function ProductPage({ _issueList }) {
    const { setList } = useDataContext()

    useEffect(() => {
        setList(_issueList);
    }, [])
    return (
        <Layout>
            <main>
                <Drawer>
                    <div className="px-12 py-12">
                        <IssueList
                        />
                    </div>
                </Drawer>
            </main>
        </Layout>
    )
}
export async function getServerSideProps() {
    try {
        const issueList = []
        return {
            props: { _issueList: issueList },
        }
    }
    catch (error) {
        return {
            props: { _issueList: [] },
        }
    }
}
