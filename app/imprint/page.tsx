import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ImprintPage() {
  return (
    <div className="relative">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-heading mb-6">Legal Notice & Privacy Policy</h1>
              <p className="text-lg text-muted-foreground mb-4">Information in accordance with Section 5 TMG</p>
            </div>

            <div>
              <p className="text-lg mb-2">Jan Raasch</p>
              <p className="text-lg mb-2">Percevalstr. 11</p>
              <p className="text-lg mb-4">23564 Lübeck</p>
              <p className="text-lg">VAT number: DE327581351</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Privacy Policy</h2>
              <h3 className="text-xl font-bold mb-3">Controller and Contact Information</h3>
              <p className="text-lg mb-2">Jan Raasch</p>
              <p className="text-lg mb-6">Email: webmaster@janraasch.com</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Collected Data</h3>
              <p className="text-lg text-muted-foreground mb-4">
                To operate my website, I have to collect and process some personal data. In the following sections, I
                will explain exactly which data is concerned and when and how I am collecting and processing it.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Please note that data transmitted via the internet (e.g. via email communication) may be subject to
                security breaches. Complete protection of your data from third-party access is not possible.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                I do not use any kind of automated profiling to serve this website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Automatically Collected Data</h3>
              <p className="text-lg text-muted-foreground mb-4">
                As usual when browsing the internet, some information about your connection will be stored on the
                servers that host the website. That information includes your browser type and version, operating system
                used, the origin of your visit ("referrer"), the exact page requested, your IP address, your country and
                configured language and the time of your visit.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                This website is hosted on Netlify (a service by Netlify, Inc., California, USA) and you can refer to
                their privacy policy if you'd like to learn more.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The basis for this data processing is Art. 6 (1) (f) GDPR, which allows the processing of data to
                fulfill a contract or for measures preliminary to a contract.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Data That You Provide</h3>
              <p className="text-lg text-muted-foreground mb-4">
                If you contact me (e.g. by email, contact form), your message may contain personal data. I will use this
                data exclusively to answer your message. You do not have to provide any data to contact me, so the
                disclosure of this data is completely voluntary for you.
              </p>
              <p className="text-lg text-muted-foreground mb-4">Affected data: The data you include in your message</p>
              <p className="text-lg text-muted-foreground mb-4">
                Lawful basis: The storage is based on our legitimate interest in replying to your message in accordance
                with Art. 6(1) lit. f GDPR.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">What Rights Do You Have Regarding Your Data?</h3>
              <p className="text-lg text-muted-foreground mb-4">
                You always have the right to request information about your stored data, its origin, its recipients, and
                the purpose of its collection at no charge. You also have the right to request that it be corrected,
                blocked, or deleted. You can contact me at any time using the address given in the legal notice if you
                have further questions about the issue of privacy and data protection. You may also, of course, file a
                complaint with the competent regulatory authorities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Revocation of Your Consent to the Processing of Your Data</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Many data processing operations are only possible with your express consent. You may revoke your consent
                at any time with future effect. An informal email making this request is sufficient. The data processed
                before I receive your request may still be legally processed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Right to File Complaints with Regulatory Authorities</h3>
              <p className="text-lg text-muted-foreground mb-4">
                If there has been a breach of data protection legislation, the person affected may file a complaint with
                the competent regulatory authorities. The competent regulatory authority for matters related to data
                protection legislation is the data protection officer of the German state in which my business is
                headquartered. A list of data protection officers and their contact details can be found at the
                following link:{" "}
                <a
                  href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Right to Data Portability</h3>
              <p className="text-lg text-muted-foreground mb-4">
                You have the right to have data which I process based on your consent or in fulfillment of a contract
                automatically delivered to yourself or to a third party in a standard, machine-readable format. If you
                require the direct transfer of data to another responsible party, this will only be done to the extent
                technically feasible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Information, Blocking, Deletion</h3>
              <p className="text-lg text-muted-foreground mb-4">
                As permitted by law, you have the right to be provided at any time with information free of charge about
                any of your personal data that is stored as well as its origin, the recipient and the purpose for which
                it has been processed. You also have the right to have this data corrected, blocked or deleted. You can
                contact us at any time using the address given in our legal notice if you have further questions on the
                topic of personal data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
