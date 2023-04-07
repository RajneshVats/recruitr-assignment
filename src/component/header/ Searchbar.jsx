
import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: white;
    width: 300px;
    border-radius: 5px;
    margin-left: 75px;
    display: flex;
`
const InputBaseSearch = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`
const SearchIconWrapper = styled(Box)`
    color: #2874f0;
    padding: 5px;
    display: flex;
`
const Searchbar = () => {
    return (
        <SearchContainer>
            <InputBaseSearch
                placeholder='Search jobs...'
            />
            <SearchIconWrapper>
                <SearchIcon style={{color: 'black'}}/>
            </SearchIconWrapper>
        </SearchContainer>
        
    )
}
export default Searchbar;