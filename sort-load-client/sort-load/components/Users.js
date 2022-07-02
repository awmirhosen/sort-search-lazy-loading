import React from "react";


const Users = (props) => {
    const search = (s) => {
        props.setFilter({
            ...props.filter,
            s,
            page:1
        });
    }

    const sort = (sort) => {
        props.setFilter({
            ...props.filter,
            sort,
            page: 1
        })
    }

    const loadMore = () => {
        props.setFilter({
            ...props.filter,
            page: props.filter.page + 1
        });
        console.log(props.filter.page)
    }

    let button;

    if (props.filter.page !== props.lastPage) {
        button = (
            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-primary" onClick={loadMore}>Load More</button>
            </div>
        )
    }


    return (
<>

    <div className="col-md-12 mb-4 input-group">
        <input className="form-control" placeholder="Search" onKeyUp={e => search(e.target.value)}/>
        <div className="input-group-append">
            <select className="form-select" onChange={e => sort(e.target.value)}>
                <option>Select</option>
                <option value="asc">Youngest</option>
                <option value="desc">Oldest</option>
            </select>
        </div>
    </div>


        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {props.users.map(user => {
                return (
                    <div className="col" key={user.id}>
                        <div className="card shadow-sm">
                            <img src="images/profile.svg" width='60px' className='mt-5 ms-5' alt=""/>

                            <div className="card-body ms-4">
                                <p className="card-text fw-bolder">
                                    {user.name}
                                </p>
                                <p> {user.email} </p>
                                <p> {user.age} </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    {button}

</>
    )
}

export default Users;