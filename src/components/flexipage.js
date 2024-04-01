import Image from 'next/image';

function Flexipage() {
    return (
        <div>
            <div class="page-header">
                <div class="page-header-title">
                    <span class="title-figure">
                        <Image
                            src="/person_account_60.png"
                            width={18}
                            height={18}
                            alt="person account"
                        />
                    </span>
                    <div class="title-body">

                    </div>
                </div>
                <div class="page-header-details">

                </div>
            </div>
        </div>
    );
}

export default Flexipage;