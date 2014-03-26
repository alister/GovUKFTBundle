

USAGE!

In composer.json:

{
    "repositories": [       
        {
            "type": "vcs",
            "url": "ssh://mike@ai-em.net/var/git/govukft_bundle.git"
        },
        {
            "type": "composer",
            "url": "https://govuk-frontend-toolkit.appspot.com"
        }
    ],
    "require": {
        "alphagov/govuk_frontend_toolkit": "dev-master",
        "ukhomeoffice/govukftbundle": "dev-master"
    }
}



Add route resource to app/config/routing.yml (for testing purposes):

govukft:
     resource: "@GovUKFTBundle/Resources/config/routing.yml"
     prefix:   /govukft



In app/AppKernel.php:

Add to bundle => "new UKHomeOffice\Bundle\GovUKFTBundle\GovUKFTBundle()"

