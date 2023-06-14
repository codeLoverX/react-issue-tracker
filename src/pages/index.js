
import Layout from '@/components/layout/Layout';


export default function ProductPage({ _issueList }) {
 return (
        <Layout>
           
        </Layout>
    )
}
export async function getServerSideProps() {
    try {
        const issueList = null
        return {
            props: { _issueList: issueList || [] },
        }
    }
    catch (error) {
        return {
            props: { _issueList: [] },
        }
    }
}
